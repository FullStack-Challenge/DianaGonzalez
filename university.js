/*Write a JavaScript program that creates a class called University with properties for university name and departments. 
Include methods to add a department, remove a department, and display all departments. 
Create an instance of the University class and add and remove departments.*/

class University{
    #name = 'UN'
    #departments
     constructor(){
     this.#departments = [];
    }

    addDepartment(department){
        this.#departments.push(department);
    }

    displayDepartments(){
        this.#departments.forEach(c => {console.log(`Nombre del departamento adicionado: ${c.nombre}`)})
        return this.#departments
    }

    removeDepartment(value){
        let valores = this.#departments.filter((elem) => elem.nombre !== value)
        console.log(`Nombre del deparatamento a eliminar ${value}`);
        console.log(`Lista departamentos:`);
        valores.forEach(el => {console.log(`${el.nombre}`)})
    }

}

const univ = new University();
univ.addDepartment({nombre: 'Psicologia'});
univ.addDepartment({nombre: 'Ingenieria'});
univ.addDepartment({nombre: 'Medicina'});
const res = univ.displayDepartments();
const deps = univ.removeDepartment('Ingenieria');




