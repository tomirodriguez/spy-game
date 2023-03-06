import Card from "@/components/Card";

type Props = {
  onCardsShowed: () => void;
};

const CardsShow = ({}: Props) => {
  return (
    <section className="container flex max-w-md grow flex-col items-center justify-center gap-6 text-white">
      <Card word={"palabra"} />
    </section>
  );
};

export default CardsShow;
