<template>
    <div class="px-5 min-h-screen">
        <div class="grid grid-cols-3 items-center py-4">
                <router-link
                    to="/artikel"
                    class="w-10 h-10 flex items-center justify-center rounded-md bg-white"
                >
                    <i class="bx bx-chevron-left text-4xl text-[#FF9F95]"></i>
                </router-link>

                <h3 class="text-lg font-bold text-center">Artikel</h3>
            </div>

        <span class="text-red-400 text-[12px] bg-red-200 py-1 px-3 inline-flex rounded-full font-semibold mt-4">{{recipe.category}}</span>
        <h2 class="text-xl font-semibold mt-4">{{ recipe.title}}</h2>

        <figure>
            <img class="w-full h-80 object-cover rounded-xl mt-6" :src="recipe.thumb" :alt="'photo' + recipe.title">
            <figcaption class="text-gray-400 text-sm text-center">Source image : unsplash.com</figcaption>
        </figure>

        <div class="mt-8">
            <p class="paragraf">
                Sebagai pengunjung setia steakhouse dimanapun Anda berada, ada berapakah istilah tingkat kematangan steak yang kamu ketahui? Kalau sebatas tipe medium rare, medium, dan well done, nah, inilah kesempatan untuk memperkaya pengetahuanmu seputar dunia steak daging atau wagyu. Selain tiga istilah tersebut, ternyata masih banyak level kematangan lain yang bisa kamu pesan!
            </p>
            <h3 class="heading">1. Blue Rare</h3>
            <span>Suhu interior daging: 38C - 45C</span>
            <p class="paragraf">
                Disebut blue steak karena proses memasaknya yang sangat singkat sehingga menimbulkan warna kebiru-biruan atau keungu-unguan pada bagian luar daging yang masih merah. Proses bakar hanya berlangsung hingga setidaknya dua menit saja dan seluruh bagian luar daging wajib dipanggang. Mengapa? Ada saja resiko keracunan makanan akibat bakteri E. coli yang untungnya, hanya hidup di atas permukaan daging saja. Itulah sebabnya bagian luar daging harus dipanggang sepenuhnya tanpa menyisakan warna merah sedikitpun.
            </p>
            <p class="paragraf">
                Blue steak idealnya berasal dari daging tenderloin atau sirloin, dan bila hasilnya optimal terasa kenyal namun mudah untuk dinikmati. Tingkat kekenyalannya sama persis dengan otot permukaan tangan antara ibu jari dan telunjuk. Dengan segala persyaratan inilah ada alasan mengapa blue steak tidak mudah untuk dimasak, bahkan untuk level restoran sekalipun karena mudah sekali gagal atau terlalu matang. Begitupun dari faktor kesehatan, perlu juga kamu mempertimbangkan sebelum mencobanya di rumah atau memesannya di restoran.
            </p>
            <h3 class="heading">2. Rare</h3>
            <span>Suhu interior: 49C - 54C</span>
            <p class="paragraf">
                Sedikit lebih lama proses memasaknya dibandingkan blue steak adalah tingkat kematangan rare yang membutuhkan sekitar 2,5 menit setiap sisinya. Bagian tengah dagingnya masih sejuk atau sedikit hangat dan tidak alot sama sekali. Warna dagingnya masih merah dan ada sedikit warna merah muda di bagian pinggiran dekat dengan yang sudah dibakar.
            </p>
            <p class="paragraf">
                Sama dengan blue steak, rare juga jarang dipesan atau direkomendasikan oleh restoran karena alasan yang sama. Maka, tetap pertimbangkan dahulu sebelum memutuskan untuk menikmatinya meskipun kualitas daging dan sisi higienis dapur serta peralatannya sudah semakin tinggi di jaman sekarang ini.
            </p>
            <h3 class="heading">3. Medium-Rare</h3>
            <span>Suhu interior daging: 55C - 57C</span>
            <p class="paragraf">Konon inilah tingkat kematangan yang paling direkomendasikan para pencinta steak dan para chef profesional. Steak pada tingkat kematangan medium-rare ditandai dengan suhunya yang terasa hangat hingga ke bagian dalam daging. Warna daging sudah berubah menjadi merah mudah dengan menyisakan sedikit warna merah saja. Kedua permukaan daging sudah dibakar sempurna dengan grill marks atau garis bekas pembakaran yang terlihat jelas.</p>
            <p class="paragraf">
                Keistimewaan medium-rare adalah keseimbangan antara teksturnya yang lembut namun lebih berisi, rasa khas daging yang masih kentara, serta tingkat kelembapannya yang menjadikan daging juicy. Waktu total memasaknya adalah 7 menit atau sekitar 3,5 menit setiap sisinya.
            </p>
            <h3 class="heading">4. Medium</h3>
            <span>Suhu interior daging: 60C - 66C</span>
            <p class="paragraf">
                Warna pink masih bisa terlihat pada steak yang sudah mencapai tingkat kematangan medium. Daging juga sudah terasa lebih matang meskipun teksturnya masih tetap empuk dan lebih berisi lagi dibandingkan medium-rare. Tingkatan ini cocok untuk dinikmati banyak kalangan karena lebih bisa diterima mereka  yang masih ragu mencoba cita rasa steak selain well-done. Untuk memasaknya dibutuhkan waktu selama 4,5 menit di setiap sisinya.
            </p>
            <h3 class="heading">5. Medium-Well</h3>
            <span>Suhu interior daging: 68C-74C</span>
            <p class="paragraf">Apakah kamu tipe penikmat steak yang masih konservatif? Pilihan medium-well masih terbilang pas karena perimbangannya masih mendekati well-done namun kamu masih sedikit bisa menikmati nikmatnya daging yang sedikit juicy di bagian tengah. Untuk mencapainya, cukup masak 5,5 menit di setiap sisinya dan jangan lupa cek temperatur bagian dalam agar tidak terlalu mendekati suhu well-done.</p>
            <h3 class="heading">6. Well-Done</h3>
            <span>Suhu interior daging: 77C ke atas</span>
            <p class="paragraf">Di luar dugaan, tingkat kematangan steak well-done tidaklah semudah itu untuk dicapai. Apabila suhunya wajan terlalu tinggi maka yang terjadi adalah bagian luarnya terlalu gosong sementara bagian dalam tidak sepenuhnya masak. Maka teknik memasak dan mengatur besar kecilnya api perlu diperhatikan sembari memastikan suhu bagian dalamnya juga tercapai sempurna.</p>
            <p class="paragraf">
                Sayangnya, tingkat kematangan steak well-done tidak lagi direkomendasikan di banyak restoran steak masa kini karena daging akan cenderung lebih alot. Generasi terdahulu lebih menyukai tingkatan ini karena ada anggapan bahwa daging lebih aman dinikmati setelah matang sepenuhnya. Meskipun demikian, berbekal kualitas daging yang baik, tingkatan well-done juga masih bisa dinikmati oleh semua kalangan. Waktu memasak untuk setiap sisinya adalah 6,5 menit.
            </p>
        </div>

        <p class="text-base text-gray-500 py-6">
            Sekarang kamu bakal lebih percaya diri memasak steak sendiri di rumah ataupun memesannya di restoran. Jangan khawatir gagal karena memasak adalah soal bagaimana kamu terus berlatih dan berlatih di dapur agar hasilnya semakin maksimal.
        </p>
       
    </div>
</template>

<script>
import axios from "axios"


export default {
    data() {
        return {
            recipe: [],
        };
    },

    methods: {
        setRecipe(data) {
            this.recipe = data;
        },
    },
    mounted() {
        axios 
             .get("https://api-lets-cook.herokuapp.com/artikels/")
                .then((response) => this.setRecipe(response.data[0]))
                .catch((error) => console.log(error));
    }
};
</script>