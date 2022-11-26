import { Button } from "@mantine/core";
import { Add } from "iconsax-react";
import Link from "next/link";
import React from "react";
import { CategoryCardData } from "../../../../../layout/assessmentCardData";
import Header from "../../categoryCreate/header";
import CategoryCardStyle from "./categoryCardStyle";

const CategoryCard = ({ categoryCard }) => {
  return (
    <div className="h-screen flex-1 py-6 flex flex-col  bg-mainBg">
      <Header />
      <main className="flex flex-col overflow-auto">
        <div className="items-center px-4 gap-1 py-4 flex justify-between">
          <h3>Total Categories ({categoryCard.length})</h3>
          <Link href="/assessments/categories/create_category">
            <Button
              className="bg-greenButton hover:bg-greenButton w-[14rem] text-base"
              leftIcon={<Add size="17" variant="Outline" />}
              onClick={() => {}}
            >
              {" "}
              Create Category
            </Button>
          </Link>
        </div>
        <div className="gap-4 flex-1 overflow-auto m-4 grid grid-cols-3">
          {categoryCard.map(
            (
              { name, category_info, test_duration, num_of_questions },
              index
            ) => {
              return (
                <CategoryCardStyle
                  key={index}
                  questions={num_of_questions}
                  title={name}
                  paragraph={category_info}
                  timestamp={test_duration.split(":")[1]}
                />
              );
            }
          )}
        </div>
      </main>
    </div>
  );
};

export default CategoryCard;
