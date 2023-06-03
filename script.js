const volumeInput = document.getElementById('volume');
const radiusInput = document.getElementById('radius');
function volume_sphere() {
  let res = (4 / 3) * (22 / 7) * Math.pow(radiusInput.value, 3);
  volumeInput.value = res;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
