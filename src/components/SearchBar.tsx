"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
    console.log(e.currentTarget);
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;

    console.log(formData);
    console.log(name);

    if (name) {
      router.push(`/list?name=${name}`);
    }
  };

  return (
    <form
      className="flex justify-between gap-4 bg-lightGray p-2 rounded-md flex-1"
      onSubmit={handleSearch}
    >
      <input
        type="text"
        name="name"
        placeholder="Search..."
        className="flex-1 bg-lightGray outline-none"
      />
      <button className="cursor-pointer">
        <Image src="/search.png" alt="" width={16} height={16} />
      </button>
    </form>
  );
}
