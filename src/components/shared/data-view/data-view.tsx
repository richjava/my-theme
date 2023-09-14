import styles from "./DataView.module.css";
import React from "react";

type Props = {
  sectionName: string,
  content: {
    attributes: any;
    collections: any
  };
};

export const DataView: React.FC<Props> = ({sectionName, content}) => {
  if (!content) return null;
  const { attributes, collections } = { ...content };
  const hasData = attributes || collections;
  if (hasData) {
    return (
      <div className={styles.dataView}>
        {sectionName && (
          <div className={styles.header}>
            <h2>{sectionName}</h2>
          </div>
        )}
        <div className={styles.body}>
          <div className={styles.attributes}>
            <h3>Attributes</h3>
            {(!attributes || Object.keys(attributes).length === 0) && (
              <p>No attributes</p>
            )}
            <ul>
              {attributes &&
                Object.keys(attributes).length > 0 &&
                Object.keys(attributes).map((attributeName) => (
                  <li key={attributeName}>
                    {attributeName}: {attributes[attributeName]}
                  </li>
                ))}
            </ul>
          </div>
          <div className={styles.collections}>
            <h3>Collections</h3>
            {(!collections || Object.keys(collections).length === 0) && (
              <p>No collections</p>
            )}
            <ul>
              {collections &&
                Object.keys(collections).length > 0 &&
                Object.keys(collections).map((collectionName) => (
                  <li key={collectionName}>
                    {collectionName}
                    <ul>
                      {collections[collectionName].map(
                        (item: any) =>
                          item.attributes &&
                          Object.keys(item.attributes).length > 0 &&
                          Object.keys(item.attributes).map((attributeName) => (
                            <li key={attributeName}>
                              {attributeName}: {item.attributes[attributeName]}
                            </li>
                          ))
                      )}
                    </ul>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return null;
};
