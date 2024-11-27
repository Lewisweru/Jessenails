import React from "react";

interface PriceItem {
  service: string;
  price: string;
}

interface PriceCategory {
  category: string;
  items: PriceItem[];
}

const priceList: PriceCategory[] = [
  {
    category: "Manicure",
    items: [
      { service: "Acrylics", price: "3,000" },
      { service: "Acrylic with design", price: "3,500" },
      { service: "French acrylic", price: "4,000" },
      { service: "Acrylic sculpting", price: "4,000" },
      { service: "Acrylic refill", price: "2,500" },
      { service: "Tips with gel", price: "1,000" },
      { service: "French tips", price: "1,500" },
      { service: "Ombre nails", price: "1,300" },
      { service: "Sticons with gel", price: "800" },
      { service: "Overlay", price: "800 - 2,500" },
      { service: "Gum gel", price: "2,500" },
      { service: "Gum gel refill", price: "2,000" },
      { service: "Gel polish", price: "500" },
    ],
  },
  {
    category: "Pedicure",
    items: [
      { service: "Pedicure with gel polish", price: "1,500" },
      { service: "Acrylics", price: "2,500" },
      { service: "Sticons with gel polish", price: "1,000" },
    ],
  },
];

const PriceList: React.FC = () => {
  return (
    <div>
      {priceList.map((category, index) => (
        <div key={index} style={{ marginBottom: "2rem" }}>
          <h2>{category.category}</h2>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th style={{ textAlign: "left", borderBottom: "1px solid #ccc", padding: "0.5rem" }}>Service</th>
                <th style={{ textAlign: "left", borderBottom: "1px solid #ccc", padding: "0.5rem" }}>Price (Ksh)</th>
              </tr>
            </thead>
            <tbody>
              {category.items.map((item, itemIndex) => (
                <tr key={itemIndex}>
                  <td style={{ padding: "0.5rem", borderBottom: "1px solid #eee" }}>{item.service}</td>
                  <td style={{ padding: "0.5rem", borderBottom: "1px solid #eee" }}>{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default PriceList;
