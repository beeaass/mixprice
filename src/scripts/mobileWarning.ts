export function checkMobile(): boolean {
    const userAgent = navigator.userAgent.toLowerCase();
    const screenWidth = window.innerWidth;

    return /iphone|ipad|android|blackberry|opera mini|iemobile|mobile/.test(userAgent) || screenWidth <= 768;
}

export function showMobileWarning(): void {
    document.body.innerHTML = `
        <div class="mobile-warning">
            <div class="mobile-warning__content">
                <h1>Упс...</h1>
                <p>Создателю сайта было лень, и он работает только на ПК.</p>
            </div>
        </div>
    `;
}
