class Stack {
    
    size;
    array;

    constructor (size) {
        this.size = size;
        this.array = [];
    };

    getLength () {
        return this.array.length
    }

    isEmpty () {
        return this.getLength() > 0 ? false : true;
    }

    getLastIdx () {
        return this.getLength() > 0 ? this.getLength() - 1 : 0;
    }

    push (item) {
        const length = this.getLength();

        if (length < this.size) {

            const lastIdx = this.isEmpty() ? 0 : this.getLastIdx() + 1;

            this.array[lastIdx] = item;

            console.log('Success Push', this.array);

        } else {
            console.log('Fail Push - stack over flow');
        }
    }

    pop () {

      if (!this.isEmpty() === false) {
         console.log('No Item');
      } else {
        const lastIdx = this.getLastIdx();
        const popItem = this.array[lastIdx];

        this.array[lastIdx] = null;
        this.array.length = this.getLength() - 1;
        
        console.log('Success Pop',popItem, this.array);
      }
        
    }

    getItem () {
        const lastIdx = this.getLastIdx();
        console.log('Success GetItem', this.array[lastIdx], this.array); 
    }
}

const newStack = new Stack(10);

for (let i=0; i<11; i++) {
    newStack.push(i);
}

newStack.pop();
newStack.pop();
newStack.pop();

newStack.getItem();