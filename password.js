// Hash SHA-256 dari password "XLILNYX"
const PASS_HASH = "120b6f00dbf88c5efba79f2dc34ba165fa44a958eef71427181335f606a64287";

async function hashText(text) {
    const encoder = new TextEncoder();
    const data = encoder.encode(text);
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    return Array.from(new Uint8Array(hashBuffer))
        .map(b => b.toString(16).padStart(2, "0"))
        .join("");
}

async function login() {
    const inputElement = document.getElementById("password");
    
    if (!inputElement) {
        alert("Elemen input 'password' gak ketemu, bego!");
        return;
    }

    const inputHash = await hashText(inputElement.value);

    if (inputHash === PASS_HASH) {
        alert("THANKYOU FOR USING MY SCRIPT - COTANCE STORE");
    } else {
        alert("LU SIAPA MPRUY MAU PAKE SCRIPT TUAN XLILNYX 😂");
    }
}
