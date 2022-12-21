import React from "react";
import ActionMenuDeleteBlogContent from "./ActionMenuDeleteBlogContent";
import ActionMenuEditBlogContent from "./ActionMenuEditBlogContent";
import ConfirmSendNewsLetterMessage from "./ConfirmSendNewsLetterMessage";


const BlogArticleAction = ({row}) => {
  return (
    <div className="flex gap-3 items-center">
      <ActionMenuEditBlogContent  rowDetail={row.original} />
      {/* <ConfirmSendNewsLetterMessage /> */}
      <ActionMenuDeleteBlogContent />
    </div>
  );
};

export default BlogArticleAction;
