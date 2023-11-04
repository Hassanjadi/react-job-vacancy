import { Table } from "flowbite-react";
import { GlobalContext } from "../../context/GlobalContext";
import { useContext } from "react";

const DataTable = () => {
  const { state, handleFunction } = useContext(GlobalContext);
  const { data } = state;

  const { handleText, handleDelete } = handleFunction;

  return (
    <section className="container mx-auto px-4 md:px-10">
      <div>
        <h1 className="text-xl font-bold font-style">Data Table</h1>
      </div>
      <Table className="min-w-full mt-5 text-xs text-center">
        <Table.Head>
          <Table.HeadCell className="px-1">No</Table.HeadCell>
          <Table.HeadCell className="px-1">Title</Table.HeadCell>
          <Table.HeadCell className="px-1">Description</Table.HeadCell>
          <Table.HeadCell className="px-1">Qualification</Table.HeadCell>
          <Table.HeadCell className="px-1">Type</Table.HeadCell>
          <Table.HeadCell className="px-1">Tenure</Table.HeadCell>
          <Table.HeadCell className="px-1">Status</Table.HeadCell>
          <Table.HeadCell className="px-1">Company</Table.HeadCell>
          <Table.HeadCell className="px-1">Logo</Table.HeadCell>
          <Table.HeadCell className="px-1">City</Table.HeadCell>
          <Table.HeadCell className="px-1">Salary</Table.HeadCell>
          <Table.HeadCell className="px-2">Action</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y bg-red-500 overflow-auto">
          {data !== null &&
            data.map((res, index) => {
              return (
                <Table.Row className="bg-white border text-center" key={index}>
                  <Table.Cell className="whitespace-nowrap p-2 text-gray-500">
                    {index + 1}
                  </Table.Cell>
                  <Table.Cell className="p-1">{res.title}</Table.Cell>
                  <Table.Cell className="p-1">
                    {handleText(res.job_description, 30)}
                  </Table.Cell>
                  <Table.Cell className="p-1">
                    {handleText(res.job_qualification, 30)}
                  </Table.Cell>
                  <Table.Cell className="p-1">{res.job_type}</Table.Cell>
                  <Table.Cell className="p-1">{res.job_tenure}</Table.Cell>
                  <Table.Cell className="p-1">{res.job_status}</Table.Cell>
                  <Table.Cell className="p-1">{res.company_name}</Table.Cell>
                  <Table.Cell className="p-1">
                    {handleText(res.company_image_url, 10)}
                  </Table.Cell>
                  <Table.Cell className="p-1">{res.company_city}</Table.Cell>
                  <Table.Cell className="p-1">
                    {res.salary_min} - {res.salary_max}
                  </Table.Cell>
                  <Table.Cell className="flex p-1 gap-1">
                    <button
                      className="border-gray-500 text-xs p-1 rounded text-indigo-500 font-semibold"
                      /* onClick={handleEdit} */
                      value={res.id}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 text-xs p-1 rounded text-white font-semibold"
                      onClick={handleDelete}
                      value={res.id}
                    >
                      Delete
                    </button>
                  </Table.Cell>
                </Table.Row>
              );
            })}
        </Table.Body>
      </Table>
    </section>
  );
};

export default DataTable;
