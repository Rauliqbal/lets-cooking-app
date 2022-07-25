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
                Kalau bicara soal apa saja dan bagaimana tubuh kita bisa menikmati kelebihan vitamin D ini, ternyata ada cerita tersendiri, lho. Jadi, bukan hanya soal kita mengonsumsi susu kaya kalsium ataupun menikmati pancaran sinar mentari pagi menjelang siang. Hal yang mengejutkan adalah makanan yang mengandung vitamin D cukup terbatas jumlahnya dan bisa jadi apa yang kita konsumsi setiap harinya belum tentu mencukupi.
            </p>
            <p class="paragraf">
                Lantas, adakah hitungan kadar vitamin D yang tubuh kita perlukan? Jawabannya ada! Untuk usia di atas 19 tahun, kita membutuhkan sekitar 600 IU (international unit) atau setara dengan 15 mikrogram vitamin D. Sementara usia lanjut atau di atas 70 tahun membutuhkan 800 IU atau sekitar 20 mikrogram. Selain mengonsumsi makanan alami yang memiliki vitamin D, kita juga bisa mengonsumsi suplemen, makanan yang telah difortifikasi, dan juga berjemur.
            </p>

            <h3 class="heading">1. Ikan Salmon</h3>

            <p class="paragraf">
               Jenis ikan yang semakin populer setiap harinya ini digadang-gadang memiliki kandungan vitamin D yang tinggi. Hanya saja ikan salmon yang biasa ada di pasaran berasal dari peternakan dan kandungan vitamin D-nya lebih rendah daripada ikan salmon liar. Meskipun begitu, ini jadi berita bagus untuk mereka penggemar salmon steak ataupun kuliner Negeri Sakura dengan makanan seperti sushi atau sashimi.
            </p>
            <p class="paragraf">
               Sebagai alternatifnya, kita juga bisa menggunakan ikan berlemak lainnya seperti sarden ataupun mackerel. Khusus soal ikan salmon, kita sudah mempersiapkan tips cara mengolahnya serta resep seru untuk dicoba seperti salmon mentai yang masih saja viral!
            </p>
            <h3 class="heading">2. Kuning Telur</h3>
           
            <p class="paragraf">
                Meskipun kebanyakan sumber vitamin D didapat dari seafood, ternyata ada sumber lain yang lebih murah yaitu kuning telur! Putih telur umumnya terdiri dari protein, sementara dalam kuning telur terdapat lemak, vitamin, dan mineral. Menariknya, kadar vitamin D dari ayam petelur yang lebih banyak terekspos sinar matahari justru lebih tinggi. Sehingga bila kita berkesempatan mendapatkan telur dari free-range chicken atau ayam yang tidak hidup dalam kandang saja, maka jangan sampai dilewatkan.
            </p>
            <p class="paragraf">
                Untuk ide-ide resep dari telur, kita bisa mencoba resep <a  class="text-blue-400 hover:underline" href="https://letscooking.vercel.app/recipe/resep-martabak-telor-daging-bayam">Resep Martabak Telor Daging Bayam</a> ataupun <a  class="text-blue-400 hover:underline" href="https://letscooking.vercel.app/recipe/cara-membuat-pempek-kapal-selam">pempek kapal selam!</a> 
            </p>

            <h3 class="heading">3. Macam-macam jamur</h3>
            
            <p class="paragraf">Jamur adalah sedikit dari protein nabati yang memiliki kandungan vitamin D. Mengenai jenisnya bisa bermacam-macam, tapi bila berkesempatan juga menikmati jamur liar yang tumbuh di alam terbuka, maka kandungan vitamin D yang dimilikinya bisa lebih tinggi.</p>
            <p class="paragraf">
                Spesial dari Let's Cook, kita bisa mencoba resep <a  class="text-blue-400 hover:underline" href="https://letscooking.vercel.app/recipe/resep-sate-jamur-tiram-bumbu-kacang">Resep Sate Jamur Tiram</a>
            </p>
            <h3 class="heading">4. Makanan yang difortifikasi</h3>
           
            <p class="paragraf">
                Di era modern ini, begitu beragam sumber makanan yang telah dilengkapi (difortifikasi) dengan berbagai kandungan gizi. Misalnya saja seperti susu sapi yang juga terdapat kalsium, fosfor, dan riboflavin. Maka, penganut vegan atau vegetarian yang rentan kekurangan vitamin D bisa memasok suplai melalui susu kacang kedelai. Sementara itu, makanan yang mengandung vitamin D lainnya adalah sereal atau oatmeal, serta satu jenis minuman lainnya seperti jus jeruk kemasan. Begitu juga vitamin C yang terdapat pada jus buah misalnya.
            </p>
            <p class="paragraf">Mengapa ada makanan yang difortifikasi? Secara alami, berbagai makanan yang disebutkan tadi tidak mengandung nutrisi-nutrisi tersebut, namun ditambahkan sebagai prasyarat dari badan kesehatan negara tersebut agar gizinya mencukupi untuk masyarakat konsumsi sehari-hari. Hanya saja ada kemungkinan kita mengonsumsi bahan makanan yang telah difortifikasi namun kurang sehat. Ini bisa menimbulkan resiko seperti obesitas, misalnya. Maka yang disarankan adalah sebaiknya kita lebih banyak mereguk manfaat dari makanan alami yang mengandung kekayaan gizi tersebut.</p>

            <h3 class="heading">5. Suplemen</h3>

            <p class="paragraf">Karena tidak selalu kita bisa menikmati makanan kaya vitamin D ataupun sinar matahari yang cukup, maka suplemen dianggap sebagai jalan tengahnya. Vitamin D terdiri atas dua jenis yaitu D2 dan D3 yang masing-masing sumbernya berbeda. Vitamin D2 umumnya berasal dari tumbuhan, jamur, dan lebih murah serta mudah diproduksi sebagai suplemen. Sementara itu vitamin D3 berasal dari hewan atau diproduksi dari kulit manusia saat kita berjemur.</p>
            <p class="paragraf">Meskipun suplemen mempermudah pemenuhan kebutuhan kita, tetap saja kita perlu memperhatikan dosis dari vitamin yang kita konsumsi sehari-hari sesuai saran dokter. Lalu untuk melengkapi kebutuhan vitamin D kita dengan berjemur di bawah sinar matahari juga tidak boleh sembarangan. Gunakan krim anti UV agar kulit tubuh kita terjaga dari terekspos sinar matahari berlebih yang bisa menyebabkan kanker kulit.</p>
        </div>

        <p class="text-base text-gray-500 py-6">
            Informasi tadi tentunya membantu kita untuk lebih mengonsumsi makanan yang mengandung Vitamin D lebih banyak sekarang. Tetap menjaga kesehatan dengan berolahraga serta taat protokol kesehatan.
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
                .then((response) => this.setRecipe(response.data[1]))
                .catch((error) => console.log(error));
    }
};
</script>