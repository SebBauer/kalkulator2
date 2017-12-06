'use sctrict';

function calc() {
    this.collectionInput = document.querySelectorAll('input');
    this.num1 = parseFloat(this.collectionInput[0].value);
    this.num2 = parseFloat(this.collectionInput[1].value);

    
    this.suma = function(){
        this.calcSuma = this.num1 + this.num2;
        return this.calcSuma;
    } ;  
    
    this.odejmowanie = function(){
        this.calcOdejmowanie = this.num1 - this.num2;
        return this.calcOdejmowanie;
    } ;   
    
    this.mnozenie = function(){
        this.calcMnozenie = this.num1 * this.num2;
        return this.calcMnozenie;
    } ;   
    
    this.dzielenie = function(){
        this.calcDzielenie = this.num1 / this.num2;
        return this.calcDzielenie;
    };
}

var suma = document.getElementById('suma');
suma.addEventListener('click', function(e){
    e.preventDefault();
    var wynik = document.getElementById('wynik');
    var calculator = new calc();
    wynik.innerText = calculator.suma();
})

var odejmowanie = document.getElementById('odejmowanie');
odejmowanie.addEventListener('click', function(e){
    e.preventDefault();
    var wynik = document.getElementById('wynik');
    var calculator = new calc();
    wynik.innerText = calculator.odejmowanie();
})

var mnozenie = document.getElementById('mnozenie');
mnozenie.addEventListener('click', function(e){
    e.preventDefault();
    var wynik = document.getElementById('wynik');
    var calculator = new calc();
    wynik.innerText = calculator.mnozenie();
})

var dzielenie = document.getElementById('dzielenie');
dzielenie.addEventListener('click', function(e){
    e.preventDefault();
    var wynik = document.getElementById('wynik');
    var calculator = new calc();
    wynik.innerText = calculator.dzielenie();
})