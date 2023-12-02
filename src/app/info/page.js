export default function Info() {
  console.log("Username:", process.env.NAME);
  console.log("Full Name:", process.env.INFO);
  return (
    <>
      <h1>Berikut adalah informasi dari user:</h1>
      <ul>
        <li>Nama : Abiyyah Putri</li>
        <li>NIM : 2110512070</li>
        <li>Prodi: S1 Sistem Informasi</li>
      </ul>
    </>
  );
}
