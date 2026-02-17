
import "./styles.css";

type Car = {
  brand: string;
  price: number;
  isDiesel: boolean;
};

const cars: Car[] = [
  { brand: "BMW", price: 20000, isDiesel: true },
  { brand: "Mercedes", price: 22000, isDiesel: false },
  { brand: "Porshe", price: 50000, isDiesel: true },
  { brand: "Nissan", price: 25000, isDiesel: false },
  { brand: "Audi", price: 50000, isDiesel: true },
];

const Homework_06: React.FC = () => (
  <div className="container">
    {cars.map((car, i) => (
      <div key={i} className="card">
        <h2>{car.brand}</h2>
        <p>Price: ${car.price}</p>
        <p className={car.isDiesel ? "diesel" : "petrol"}>
          Fuel: {car.isDiesel ? "Diesel" : "Petrol"}
        </p>
      </div>
    ))}
  </div>
);

export default Homework_06;
