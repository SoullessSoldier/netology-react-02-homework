import PropTypes from "prop-types";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

function ProjectList({ projects }) {
  const childElements = [...projects].map((projectItem, index) => (
    <img
      key={index}
      className={"masonry-item-img"}
      src={projectItem.img}
      alt={projectItem.category}
    />
  ));
  return (
    <div className="masonry">
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 300: 2, 500: 3, 700: 4, 900: 5 }}
      >
        <Masonry columnsCount={3} gutter="10px">
          {childElements}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
}

ProjectList.propTypes = {
  projects: PropTypes.array.isRequired,
};

export default ProjectList;
