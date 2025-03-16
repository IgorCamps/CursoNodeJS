function Calculadora() {
    
        // Atributos ou métodos públicos
        this.display = document.querySelector('.display'),
        this.btnCLear = document.querySelector('.btn-clear'),

        // métodos
        this.inicia = () => {
            this.cliqueBotoes();
            this.pressionaEnter();
        }

       this.pressionaEnter = ()=>{
            this.display.addEventListener('keyup', (e) =>{
                if (e.keyCode === 13) {
                    this.realizaConta();
                }
            });
        }

        this.clearDisplay = () => {
            this.display.value = '';
        }

        this.apagaUm = () => {
            this.display.value = this.display.value.slice(0, -1);
        }

        this.realizaConta = () => {
            try {
                const conta = eval(this.display.value);

                if(!conta) {
                    alert('Conta inválida');
                    return;
                }

                this.display.value = String(conta);
            } catch (e) {
                alert('Conta inválida');
            }
        };

        this.cliqueBotoes = () => {
            document.addEventListener('click', (e) => {
                const el = e.target;
                
                if(el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }

                if(el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if(el.classList.contains('btn-del')){
                    this.apagaUm();
                }

                if(el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }
            });
        };

        this.btnParaDisplay = (valor) => {
            this.display.value += valor;
            this.display.focus();
        };
};

const calculadora =  new Calculadora();
calculadora.inicia();