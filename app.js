// ================== اضافه کردن کادر پروفایل به همه صفحات ==================
document.addEventListener('DOMContentLoaded', () => {
    // ۱. ساخت کادر پروفایل
    const profileBox = document.createElement('div');
    profileBox.id = 'profile-box';
    
    // استایل کادر پروفایل (شناور پایین سمت راست)
    profileBox.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: var(--bg-card, #111111);
        padding: 6px;
        border-radius: 12px;
        border: 1px solid var(--border-color, #333);
        z-index: 9998;
        width: 50px;
    `;

    // ۲. محتوای کادر (عکس و اسم)
    profileBox.innerHTML = `
        <img id="profile-img" src="icon-192x192.png" alt="Profile" style="width:30px; height:30px; border-radius:50%; margin-bottom:4px; border:2px solid var(--accent, #5c0e1b);">
        <span id="profile-name" style="font-size:10px; color:var(--text-color, #f0e6d2);">User</span>
    `;

    document.body.appendChild(profileBox);

    // ۳. لود کردن اسم ذخیره شده
    const savedName = localStorage.getItem('userName') || 'User';
    document.getElementById('profile-name').innerText = savedName;
});
