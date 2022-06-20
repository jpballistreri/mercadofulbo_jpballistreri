import React, { useEffect, useState } from "react";

export default function TestPromesa() {
  const [resultado, setResultado] = useState([]);

  useEffect(() => {
    const testPromesa = new Promise((resolve, reject) => {
      resolve([
        { id: "1", producto: "tomate" },
        { id: "2", producto: "lechuga" },
        { id: "3", producto: "remolacha" },
      ]);
    });
    testPromesa
      .then((res) => {
        setResultado(res);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <div>{JSON.stringify(resultado)}</div>;
}
