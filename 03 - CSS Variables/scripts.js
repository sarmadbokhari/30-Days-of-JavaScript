let inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
  let suffix = this.dataset.suffix || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
