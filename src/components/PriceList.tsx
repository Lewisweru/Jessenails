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
    <section id="price-list" className="py-20 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Jessy Nails Price List
        </h2>
        {priceList.map((category, index) => (
          <div key={index} className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">
              {category.category}
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="bg-pink-100 text-pink-600 px-4 py-2 border border-gray-200 text-left">
                      Service
                    </th>
                    <th className="bg-pink-100 text-pink-600 px-4 py-2 border border-gray-200 text-left">
                      Price (Ksh)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {category.items.map((item, itemIndex) => (
                    <tr
                      key={itemIndex}
                      className={itemIndex % 2 === 0 ? "bg-gray-50" : ""}
                    >
                      <td className="px-4 py-2 border border-gray-200">
                        {item.service}
                      </td>
                      <td className="px-4 py-2 border border-gray-200">
                        {item.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PriceList;
