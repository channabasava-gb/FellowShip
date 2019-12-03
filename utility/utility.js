/* @description : inventory data management
     * @purpose:   to calculate the inventory items
     * @param {data}, which has data information. 
     */
    exports.inventoryObj = (data) => {
        // console.log(data);
        let rice = data.rice;
        let wheat = data.wheat;
        let pulses = data.pulses;
        let valueOfRice = 0, valueOfWheat = 0, valueOfpulses= 0;
        // console.log(rice);
        
        for (let key in rice) {
            let amount = rice[key].weight * rice[key].price;
            console.log("cost of Rice-->" + rice[key].name + " is:" + amount + "Rs\n");
            valueOfRice = valueOfRice + amount
        }
        console.log("totale value of the rice is-->" + valueOfRice + "Rs\n");
    
        for (let key in wheat) {
            let amount = wheat[key].weight * wheat[key].price;
            console.log("Cost of wheat-->" + wheat[key].name + " is " + amount + "Rs\n");
            valueOfWheat = valueOfWheat + amount;
        }
        console.log("totale value of the wheat is-->" + valueOfWheat + "Rs\n");
      
        for (let key in pulses) {
            let amount = pulses[key].weight * pulses[key].price;
            console.log("Cost of pulses-->" + pulses[key].name + " is " + amount + "Rs\n");
            valueOfpulses = valueOfpulses + amount;
        }
        console.log("totale value of the pulses is-->" + valueOfpulses + "Rs\n");
        
    }





    
