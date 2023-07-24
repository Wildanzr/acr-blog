import { TList, DList } from "@/components";

const ItemAbout = ({ icon, title, description }: ItemAboutProps) => {
  return (
    <div className="flex flex-row items-center justify-center space-x-5">
      <div className="flex px-2 py-2 border-4 rounded-full border-redprimary">
        {icon}
      </div>
      <div className="flex flex-col">
        <TList text={title} />
        <DList text={description} />
      </div>
    </div>
  );
};

export default ItemAbout;
