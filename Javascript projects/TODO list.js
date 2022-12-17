let input = prompt('What would you like to do? ');
const todo = ['Collect Chicken Eggs', 'clean Litter Eggs'];
while (input.toLowerCase() !== 'quit' && input.toLowerCase() !== 'q' ) {
    if (input === 'list') {
        console.log('************************');
        for (let index = 0; index < todo.length; index++) {
            console.log(`${index}: ${todo[index]}`);
        }
    } else if (input === 'new') {
        const newTodo = prompt('Ok what is the new TODO');
        todo.push(newTodo)
        console.log(`Added ${newTodo} to list`);
    } else if (input === 'delete') {
        const index = parseInt(prompt('Enter an Index to delete'));
        if (!Number.isNaN(index)) {      // It check if given number  is Nan the return true else return false
            const deleted = todo.splice(index, 1);
            console.log(`Ok deleted ${deleted[0]}`);
        } else {
            console.log('Invalid Index');
        }
        
    }
    input = prompt('What would you like to do? ');
    
}
console.log("Quit the app");