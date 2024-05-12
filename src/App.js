import DataTable from './Myapp';

const myData = [
  { id: 1, name: 'Alice', age: 30 },
  { id: 2, name: 'Bob', age: 25 },
  { id: 3, name: 'Charlie', age: 40 },
];

const myColumns = ['id', 'name', 'age'];

export default function App() {
   return (
    <div>
      <DataTable data={myData} columns={myColumns} />
    </div>
  );
}


