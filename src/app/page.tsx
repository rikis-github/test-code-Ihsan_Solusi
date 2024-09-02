import Image from "next/image";
import Link from "next/link";

export default function Home() {
   return (
      <div>
         <h1 className="text-2xl font-bold">Petunjuk Live Code</h1>
         <p>
            {" "}
            Ada beberapa task yang harus diselesaikan untuk memenuhi syarat
            test. berikut tasknya
            <sup className="text-xs bg-slate-100 border border-solid text-red-500">
               Waktu hanya 30 menit maksimal.
            </sup>
         </p>

         <div className="mt-2">
            <ul className=" list-decimal pl-5">
               <li> Buka page <Link href={"/test-1"} className=" underline cursor-pointer text-blue-500">Test-1</Link> </li>
               <li> Ketika buka halaman tersebut kemungkinan ada terjadi error, tolong perbaiki. jika tidak ada akan jadi bonus </li>
               <li> Buat kan fungsi untuk converter binary seperti dalam UI tersebut, dengan aturan <i>x</i> to decimal or decimal to <i>x</i> </li>
               <li> berikan validasi supaya tidak bisa memilih selain <i>x</i> to decimal or decimal to <i>x</i> </li>
               <li> pada <i> .client </i> hanya digunakan untuk render UI, tidak boleh ada fungsi atau logic </li>
               <li> fungsi logic hanya pada <i> .provider </i> </li>
            </ul>
         </div>
         

         <div className="mt-2 font-bold">
            <sup>*boleh sambil search google, wajib sambil share screen</sup>
         </div>

         <div className="mt-2">
            <h1 className="mt-2 "> Good Luck ^_^ </h1>
         </div>
      </div>
   );
}
