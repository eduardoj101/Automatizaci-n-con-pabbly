const WEBHOOK_URL = 'https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjcwNTZjMDYzZjA0MzA1MjY4NTUzMzUxMzEi_pc';

    async function enviar() {
        const email = document.getElementById('email').value.trim();
        const error = document.getElementById('error');
        const btn = document.getElementById('btn');

        error.style.display = 'none';

        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            error.style.display = 'block';
            return;
        }

        btn.disabled = true;
        btn.textContent = 'Enviando...';

        try {
            await fetch(WEBHOOK_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: email })
            });

            document.getElementById('form-view').style.display = 'none';
            document.getElementById('success-view').style.display = 'block';

        } catch (e) {
            alert('Error al enviar. Intenta de nuevo.');
            btn.disabled = false;
            btn.textContent = 'Enviar';
        }
    }