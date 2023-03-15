
//1.Поясніть своїми словами, як ви розумієте, як працює прототипне наслідування в Javascript

//Унвслідування властивостей одного об'єкта іншим через приховану властивість [рrototype]



//2.Для чого потрібно викликати super() у конструкторі класу-нащадка?

//для того, щоб використовувати конструктор класса 'батька' під час наслідування


//user.name = значение свойства

//user._namae = get name(), который выдаёт свойство


class Employee {

    constructor(options){

        this.name = options.name,

        this.age = options.age,

        this.salary = options.salary

    }



    get nameInfo() {

        return this._name

    }

    set nameInfo(newName) {

        this._name = newName

    }

    get ageInfo() {

        return this._age

    }

    set ageInfo(newAge) {

        this._age = newAge

    }

    get salaryInfo() {

        return this._salary 

    }

    set salaryInfo(newSalary) {

        this._salary = newSalary

    }

}



class Programmer extends Employee {

    constructor(options){

        super(options)

        this.lang = ['engl', 'ukr']

    }
  
    get salaryinfo() {

        return this.salary * 3

    } 

}


const proger = new Programmer({

    name: 'Vasya',

    age: 20,

    salary: 21000

})


const frontend = new Programmer({

    name: 'Kolya',

    age: 22,

    salary: 25000

})


console.log(proger);
