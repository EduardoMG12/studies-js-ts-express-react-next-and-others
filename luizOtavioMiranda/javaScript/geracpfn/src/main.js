import GenerateCPF from './modules/GenerateCPF';

import './assets/css/style.css';

(function() {
  const generate = new GenerateCPF();
  const cpfGenerated = document.querySelector('.cpf-generate');
  cpfGenerated.innerHTML = generate.geraNewCpf();
})();
