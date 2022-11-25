import { Button } from "@mantine/core";
import { Add } from "iconsax-react";
import Link from "next/link";
import React from "react";
import { CategoryCardData } from "../../../../../layout/assessmentCardData";
import Header from "../../categoryCreate/header";
import CategoryCardStyle from "./categoryCardStyle";

const CategoryCard = () => {
  return (
    <div className="h-screen flex-1 py-6 flex flex-col  bg-[#e5e5e5]">
      <Header />
      <main className="flex flex-col">
        <div className="items-center px-4 gap-1 py-4 flex justify-between">
          <h3>Total Categories (9)</h3>
          <Link href="/assessments/categories/create_category">
            <Button
              className="bg-[#38CB89] hover:bg-[#38CB89] w-[14rem] text-base"
              leftIcon={<Add size="17" variant="Outline" />}
              onClick={() => {}}
            >
              {" "}
              Create Category
            </Button>
          </Link>
        </div>
        <div className="flex gap-4 m-4">
          {CategoryCardData.map(
            ({ title, paragraph, timestamp, questions }, index) => {
              return (
                <CategoryCardStyle
                  key={index}
                  questions={questions}
                  title={title}
                  paragraph={paragraph}
                  timestamp={timestamp}
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
