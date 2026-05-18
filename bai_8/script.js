// Smart fee calculation and form validation
(function(){
  const baseFee = 500000; // base fee per member in VND
  const promoMap = { 'TECH50': {type:'percent', value:0.5}, 'WELCOME100': {type:'fixed', value:100000} }

  const el = id => document.getElementById(id)
  const totalFeeEl = el('totalFee')
  const numMembersEl = el('numMembers')
  const earlyEl = el('earlyBird')
  const promoEl = el('promo')
  const form = el('registerForm')
  const messages = el('messages')

  function calculateFee(){
    const n = Math.max(1, Math.min(5, parseInt(numMembersEl.value)||1))
    let subtotal = 0
    for(let i=0;i<n;i++) subtotal += baseFee
    let discounts = []
    if(earlyEl.checked){
      const after = Math.round(subtotal * 0.8)
      discounts.push({label:'Early Bird (20%)', amount: subtotal - after})
      subtotal = after
    }
    const code = (promoEl.value||'').trim().toUpperCase()
    if(code && promoMap[code]){
      const p = promoMap[code]
      if(p.type === 'percent'){
        const after = Math.round(subtotal * (1 - p.value))
        discounts.push({label:`Promo ${code} (${p.value*100}%)`, amount: subtotal - after})
        subtotal = after
      } else {
        const amount = Math.min(subtotal, p.value)
        discounts.push({label:`Promo ${code} (₫${new Intl.NumberFormat('vi-VN').format(p.value)})`, amount})
        subtotal = Math.max(0, subtotal - p.value)
      }
    }
    return { total: subtotal, discounts }
  }

  function renderFee(){
    const res = calculateFee()
    const total = res.total
    totalFeeEl.textContent = new Intl.NumberFormat('vi-VN').format(total) + ' ₫'
    const breakdown = el('feeBreakdown')
    breakdown.innerHTML = ''
    const n = Math.max(1, Math.min(5, parseInt(numMembersEl.value)||1))
    const subtotal = baseFee * n
    const liSub = document.createElement('li')
    liSub.textContent = `Phí cơ bản (${n} x ₫${new Intl.NumberFormat('vi-VN').format(baseFee)}): ₫${new Intl.NumberFormat('vi-VN').format(subtotal)}`
    breakdown.appendChild(liSub)
    res.discounts.forEach(d=>{
      const li = document.createElement('li')
      li.textContent = `${d.label}: -₫${new Intl.NumberFormat('vi-VN').format(d.amount)}`
      breakdown.appendChild(li)
    })
  }

  function isValidEmail(email){
    return /[^@\s]+@[^@\s]+\.[^@\s]+/.test(email)
  }

  function validate(){
    const errs = []
    const team = el('teamName').value.trim()
    if(!team) errs.push('Tên đội là bắt buộc')
    const email = el('contactEmail').value.trim()
    if(!isValidEmail(email)) errs.push('Email không hợp lệ')
    const pwd = el('password').value
    if(pwd.length < 8) errs.push('Mật khẩu cần ít nhất 8 ký tự')
    const memberInputs = Array.from(document.getElementsByName('memberName'))
    const filled = memberInputs.filter(i=>i.value.trim()!=='')
    if(filled.length === 0) errs.push('Ít nhất 1 thành viên cần tên')
    return errs
  }

  // events
  numMembersEl.addEventListener('input', renderFee)
  earlyEl.addEventListener('change', renderFee)
  promoEl.addEventListener('input', renderFee)
  document.addEventListener('DOMContentLoaded', renderFee)

  form.addEventListener('submit', function(e){
    e.preventDefault()
    messages.className = ''
    messages.textContent = ''
    const errs = validate()
    if(errs.length){
      messages.classList.add('msg-error')
      messages.textContent = errs.join('; ')
      return
    }
    const res = calculateFee()
    const total = res.total
    messages.classList.add('msg-success')
    messages.textContent = 'Đăng ký thành công — Tổng phí: ' + new Intl.NumberFormat('vi-VN').format(total) + ' ₫'
    // In a real app we'd send data to server here
    form.reset()
    renderFee()
  })
})();
