import "../../App.css";

function Layout(props) {
  return (
    <div className="layout_wr">
      <div className="layout">{props.children}</div>
    </div>
  );
}

export default Layout;
