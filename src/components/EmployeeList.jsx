/* Employee List Component for the list items */

import EmployeeListItem from "./EmployeeListItem";

function EmployeeList() {

    const employees = [

        { name: "James King", title: "President and CEO" },
        { name: "Julie Taylor", title: "VP of Marketing" },
        { name: "Eugene Lee", title: "CFO" },
        { name: "John Williams", title: "VP of Engineering" },
        { name: "Ray Moore", title: "VP of Sales" },
        { name: "Paul Jones", title: "QA Manager" },

    ]

    return (

        <div className="EmployeeList">

            {employees.map((employee) => (

                <EmployeeListItem

                    key={employee.name}
                    name={employee.name}
                    title={employee.title}

                />

            ))}

        </div>

    )

}

export default EmployeeList