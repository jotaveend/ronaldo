function entrar(){

    const audio = document.getElementById('audio');
    audio.play().catch(err => console.log("Erro ao tocar o áudio:", err));
}