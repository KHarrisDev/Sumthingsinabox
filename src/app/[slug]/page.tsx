import ProductImages from "@/components/ProductImages";
import CustomizeProducts from "@/components/CustomizeProducts";
import Add from "@/components/Add";

export default function SinglePage() {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative flex flex-col lg:flex-row gap-16 ">
      {/* IMG  */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages />
      </div>
      {/* TEXT  */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">Product Name</h1>
        <p className="text-gray">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          molestiae harum suscipit sequi quas quidem temporibus optio numquam
          recusandae labore incidunt at nisi repudiandae velit explicabo
          voluptatibus libero, nesciunt fuga?
        </p>
        <div className="h-[2px] bg-gray" />
        <div className="flex items-center gap-4">
          <h3 className="text-xl text-gray line-through">$59</h3>
          <h2 className="font-medium text-2xl">$49</h2>
        </div>
        <div className="h-[2px] bg-gray" />
        <CustomizeProducts />
        <Add />
        <div className="h-[2px] bg-gray" />
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            sit nulla molestias ab exercitationem temporibus odio assumenda
            vitae eaque, quibusdam repudiandae accusamus enim et magni. Nam nemo
            quisquam maxime soluta!
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            sit nulla molestias ab exercitationem temporibus odio assumenda
            vitae eaque, quibusdam repudiandae accusamus enim et magni. Nam nemo
            quisquam maxime soluta!
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            sit nulla molestias ab exercitationem temporibus odio assumenda
            vitae eaque, quibusdam repudiandae accusamus enim et magni. Nam nemo
            quisquam maxime soluta!
          </p>
        </div>
      </div>
    </div>
  );
}
