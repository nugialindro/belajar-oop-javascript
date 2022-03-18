
// ===o0o==== contoh function ===o0o==== //

// keliling segitiga
function kelilingSegitiga (sisi, sisi, sisi) {
    const hasil = sisi + sisi + sisi;
    return hasil;
}

const hasilKeliling = kelilingSegitiga (10, 10, 10)
console.log(`Keliling segitiga jika sisi nya 10 cm adalah ${hasilKeliling} cm`)

// luas segitiga
function luasSegitiga (alas, tinggi) {
    const hasil = 0.5 * alas * tinggi;
    return hasil;
}

const hasilLuas = luasSegitiga (20, 10)
console.log(`Luas segitiga jika alas 20 cm dan tinggi 10 cm adalah ${hasilLuas} cm`)




// ===o0o==== contoh class ===o0o==== //

class Iphone {
    constructor(tipe, prosesor, ram, kapasitasBatre, tahunRilis,) {
        this.tipe = tipe;
        this.prosesor= prosesor;
        this.ram = ram
        this.kapasitasBatre = kapasitasBatre;
        this.tahunRilis = tahunRilis;
    }

    detailsIphone() {
        console.log(`
            Tipe iphone         : ${this.tipe}
            Prosesor            : ${this.prosesor}
            RAM                 : ${this.ram}
            Kapasitas Batre     : ${this.kapasitasBatre}
            Tahun Rilis         : ${this.tahunRilis}
        `);
    }
}

class IphoneX extends Iphone {
    constructor(tipe, prosesor, ram, kapasitasBatre, tahunRilis, faceID) {
        super(tipe, prosesor, ram,kapasitasBatre, tahunRilis)
        this.faceID = faceID
    }

    detailsIphone() {
        super.detailsIphone();
    }
}

class Iphone13 extends Iphone {
    constructor(tipe, prosesor, ram, kapasitasBatre, tahunRilis, faceID, kameraBoba) {
        super(tipe, prosesor, ram, kapasitasBatre, tahunRilis)
        this.faceID = faceID
        this.kameraBoba = kameraBoba
    }

    detailsIphone() {
        super.detailsIphone();
        console.log(`
            Apakah tipe ini mempunyai Face ID ?     : ${this.faceID}
            Apakah tipe ini mempunyai kamera boba ? : ${this.kameraBoba}
            `)
    }
}

const iphoneNugi = new Iphone13("Iphone 13", "A15 Bionic", "4GB", "3240mAh", "2021", true, true);
iphoneNugi.detailsIphone()
