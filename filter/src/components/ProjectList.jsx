import PropTypes from "prop-types";
import Masonry from "react-responsive-masonry";

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
      <Masonry columnsCount={3} gutter="10px">
        {childElements}
      </Masonry>
    </div>
  );
}

ProjectList.propTypes = {
  projects: PropTypes.array.isRequired,
};

export default ProjectList;
