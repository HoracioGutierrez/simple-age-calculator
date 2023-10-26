"use client"
import Page from "@/components/Page";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { useState } from "react";

const daysInNumber = Array.from({ length: 31 }, (_, i) => i + 1);
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const years = Array.from({ length: 100 }, (_, i) => i + 1924);

export default function Home() {

  const [day, setDay] = useState("")
  const [month, setMonth] = useState("")
  const [year, setYear] = useState("")
  const [age, setAge] = useState<null | number>(null)

  const handleDayChange = (value: any) => {
    setDay(value)
  }

  const handleMonthChange = (value: any) => {
    setMonth(value)
  }

  const handleYearChange = (value: any) => {
    setYear(value)
  }

  const handleSubmit = () => {
    const selectedDate = new Date(`${month} ${day} ${year}`)
    const today = new Date()
    const age = today.getFullYear() - selectedDate.getFullYear()
    setAge(age)
  }

  const handleReset = () => {
    setDay("")
    setMonth("")
    setYear("")
    setAge(null)
  }

  return (
    <Page noTitle className="grid place-items-center">
      <Card className="border-none p-4 w-full md:max-w-sm">
        <CardHeader>Age Selector Form</CardHeader>
        <CardContent className="space-y-4">
          {!age && (
            <>
              <Select onValueChange={handleDayChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Day" />
                </SelectTrigger>
                <SelectContent className="max-h-40">
                  {daysInNumber.map((day) => (
                    <SelectItem value={`${day}`} key={day}>{day}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select onValueChange={handleMonthChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Month" />
                </SelectTrigger>
                <SelectContent className="max-h-40">
                  {months.map((month) => (
                    <SelectItem value={`${month}`} key={month}>{month}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select onValueChange={handleYearChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Year" />
                </SelectTrigger>
                <SelectContent className="max-h-40">
                  {years.map((year) => (
                    <SelectItem value={`${year}`} key={year}>{year}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </>
          )}
          {age !== null && isNaN(age) && (
            <div className="text-center">
              <p className="text-2xl font-semibold text-red-500">Please select a valid date</p>
            </div>
          )}
          {age === null  && (
            <div className="text-center">
              <p className="text-xl font-semibold ">Please select a date</p>
            </div>
          )}
          {age !== null && !isNaN(age) && (
            <div className="text-center">
              <p className="text-2xl font-semibold text-green-500">Your age is {age}</p>
            </div>
          )}
        </CardContent>
        <CardFooter className="justify-center gap-4">
          <Button onClick={handleSubmit} variant="outline">submit</Button>
          <Button onClick={handleReset} variant="outline">reset</Button>
        </CardFooter>
      </Card>
    </Page>
  )
}
