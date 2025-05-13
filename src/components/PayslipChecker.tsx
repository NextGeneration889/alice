import React, { useState } from 'react'

function PayslipChecker() {
  const [file, setFile] = useState<File | null>(null)
  const [result, setResult] = useState<string>('')

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFile(e.target.files[0])
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Processo simulato di verifica
    if (file) {
      setResult(`La busta paga "${file.name}" è stata verificata correttamente.`)
    }
  }

  return (
    <div className="bg-white p-6 rounded shadow">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="payslip" className="block text-gray-700">
            Carica la tua busta paga:
          </label>
          <input
            type="file"
            id="payslip"
            accept=".pdf,.png,.jpg,.jpeg"
            onChange={handleFileChange}
            className="mt-2"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Verifica
        </button>
      </form>
      {result && <p className="mt-4 text-green-600">{result}</p>}
    </div>
  )
}

export default PayslipChecker
