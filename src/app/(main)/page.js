import HeroSlider from "../../components/Sliders/HeroSlider";
import { getGameCategories, getGamesByCategoryId, getGamesBySelectedCategories } from "../../lib/gameQueries";

export default async function Home() {
  // const allCategoreis = await getGameCategories();
  // const category = await getGamesByCategoryId(1);

  const [allCategoreis, category] = await Promise.all([
    getGameCategories(),
    getGamesByCategoryId(1)
  ]);

  const selectedCategoryIds = [1,2,5];
  const multipleCategories = await getGamesBySelectedCategories(selectedCategoryIds);

  return (
    <>
      <HeroSlider />

      {/* <GameCategory category={multipleCategories[1]} /> */}
      {/* <pre>{JSON.stringify(multipleCategories, null, 2)}</pre> */}

    </>
  );
}