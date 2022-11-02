const firstName = () => console.log('Meghana');
const lastName = () => console.log('Reddy');
const printName = () => {
    console.log('My name is:');
    setTimeout(firstName,0);
    lastName();
}
printName();
