var jualMobil={
    iklan:function(){
        document.write(`Bu, saya ${this.nama} jual mobil ${this.brand} tahun ${this.tahun} bekas` );
    }
};

const promosi = Object.create(jualMobil)

promosi.nama = 'Yahya'
promosi.brand = 'Lamborghini Aventador'
promosi.tahun = 2011
promosi.iklan();