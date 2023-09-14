import styles from "./Layout.module.css";

const Layout = (props: any) => {
  if (!props) return <></>;
  const { children, layoutComps, page } = props;

  return (
    <div className={styles.layout}>
      {page &&
        layoutComps.length > 0 &&
        layoutComps.map((Section: any, i: number) => {
          return (
            <div key={i}>
              <Section content={page.layout.sections[i].content} />
              {i === page.layout.contentIndex - 1 && <main id="main">{children}</main>}
            </div>
          );
        })}
    </div>
  );
};

export default Layout;
