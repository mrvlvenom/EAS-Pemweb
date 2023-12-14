<template>
    <div class="flex flex-col justify-center items-center h-auto md:h-screen text-[#333]">
      <!-- Konten lainnya -->
      <form @submit.prevent="Check-Email" class="p-5 px-24 border-[0.4px] border-gray-600 rounded-lg mx-4 md:mx-0">
        <div class="grid grid-cols-1 md:grid-cols-2 md:gap-10 items-start">
          <div class="flex flex-col center items-center gap-2 md:mr-10">
            <label for="inputNama">Masukkan Email anda</label>
            <input v-model="inputEmail" type="text" placeholder="Masukkan Email anda" class="custom-input bg-black/50 backdrop-blur-md" />

          </div>
        </div>
  
        <br />
        <br />
        <br />
        <button type="submit" class="login-btn w-full">Check</button>
      </form>
      <br />
      <br />
      <br />
      <br />
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        inputNama: "",
        inputEmail: "",
        inputAsalSekolah: "",
        inputTanggalPendaftaran: "",
      };
    },
    methods: {
      Registrasi() {
        const newRegistrasi = {
          Nama: this.inputNama,
          Email: this.inputEmail,
          Asal_Sekolah: this.inputAsalSekolah,
        };
        axios
          .post("http://localhost:5000/api/Registrasi", newRegistrasi)
          .then((response) => {
            console.log("Registrasi added successfully:", response.data);
            this.inputNama = "";
            this.inputEmail = "";
            this.inputAsalSekolah = "";
          })
          .catch((error) => {
            console.error("Error adding registrasi:", error);
          });
      },
      fetchPrioritiesFromAPI() {
        axios
          .get("http://localhost:5000/api/Regsitrasi")
          .then((response) => {
            this.priorities = response.data.docs;
          })
          .catch((error) => {
            console.error("Error fetching priorities from API:", error);
          });
      },
    },
    created() {
      this.fetchPrioritiesFromAPI();
    },
  };
  </script>
  
  <style>
  label {
    font-weight: 600;
    font-size: 12px;
    text-align: center;
    margin-top: 10px;
  }
  </style>
  