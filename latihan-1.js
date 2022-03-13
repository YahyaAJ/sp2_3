var gameConsole={
    brand : 'Sony PS4 Slim',
    weight :  2100,
    color : 'Alice Blue',
    turnOn : function(){
        return 'On'
    },
    turnOff : function(){
        return 'Off'
    }
}
document.write('Game Console ',gameConsole,'<br><br>')
document.write('Brand : ', gameConsole.brand,'<br>')
document.write('weigth : ', gameConsole.weight,' g<br>')
document.write('Color : ', gameConsole.color,'<br>')
document.write('Turn On : ',gameConsole.turnOn(),'<br>')
document.write('Turn Off : ',gameConsole.turnOff(),'<br><br>')

var tv={
    brand : 'SAMSUNG LED TV',
    price : 2,
    color : 'black',
    screen : '32 Inch',
    turnOn : function(){
        return 'On'
    },
    turnOff : function (){
        return 'Off'
    }
}
document.write('Television ',tv,'<br><br>')
document.write('Brand : ', tv.brand,'<br>')
document.write("Screen : ", tv.screen, "<br>")
document.write("Color : ", tv.color, "<br>")
document.write('Turn On : ',tv.turnOn(),'<br>')
document.write('Turn Off : ',tv.turnOff(),'<br><br>')

var car={
    brand : 'Tesla Model 3 Standard Range Plus Facelift (New)',
    speed : 162.2,
    color : 'Red crimson',
    gas : function(){
        return 'Drive'
    },
    brake : function(){
        return 'Stop'
    }
}
document.write('Car ',car,'<br><br>')
document.write('Brand : ', car.brand,'<br>')
document.write("Speed : ", car.speed, "<br>")
document.write("Color : ", car.color, "<br>")
document.write('Gas : ',car.gas(),'<br>')
document.write('Brake : ',car.brake(),'<br><br>')

var truck={
    brand : 'Hyundai Xcient',
    maxPower : 410,
    color : 'silver',
    gas : function(){
        return 'Drive'
    },
    brake : function(){
        return 'Stop'
    }
}
document.write('Truck ',truck,'<br><br>')
document.write('Brand : ', truck.brand,'<br>')
document.write("Max Power : ", truck.maxPower, "<br>")
document.write("Color : ", truck.color, "<br>")
document.write('Gas : ',truck.gas(),'<br>')
document.write('Brake : ',truck.brake(),'<br><br>')

var laptop={
    brand : 'Asus ROG Zephyrus Duo 15 ',
    processor : 'Intel Core i9-10980HK',
    ram : '32',
    color : 'black',
    screen : '32 Inch',
    turnOn : function(){
        return 'On'
    },
    turnOff : function (){
        return 'Off'
    }
}
document.write('Television ',laptop,'<br><br>')
document.write('Brand : ', laptop.brand,'<br>')
document.write("Processor : ", laptop.processor, "<br>")
document.write("RAM : ", laptop.ram, "GB<br>")
document.write("Color : ", laptop.color, "<br>")
document.write('Turn On : ',laptop.turnOn(),'<br>')
document.write('Turn Off : ',laptop.turnOff(),'<br><br>')
