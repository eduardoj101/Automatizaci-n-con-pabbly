const WEBHOOK_URL = 'https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjcwNTZjMDYzZjA0MzA1MjY4NTUzMzUxMzEi_pc';

async function enviar() {
    const emailInput = document.getElementById('email');
    const email = emailInput.value.trim();
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
        const response = await fetch(WEBHOOK_URL, {
            method: 'POST',
            
            headers: { 
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify({ 
                email: email,
                fecha: new Date().toISOString() 
            })
        });

     
        
        if (response.ok || response.type === 'opaque') {
           
            document.getElementById('form-view').style.display = 'none';
            document.getElementById('success-view').style.display = 'block';
        } else {
            throw new Error('Error en la respuesta del servidor');
        }

    } catch (e) {
        console.error("Error detallado:", e);
        alert('Hubo un problema al conectar con el servidor. Revisa tu conexión.');
        
       
        btn.disabled = false;
        btn.textContent = 'Enviar';
    }
}