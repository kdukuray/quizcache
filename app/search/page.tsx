"use client";
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import PapersTable from "@/custom_components/PapersTables";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"



export default function Search() {

    const searchFormSchema = z.object({
        keywords: z.string()
    })

    const searchForm = useForm<z.infer<typeof searchFormSchema>>({
        resolver: zodResolver(searchFormSchema),
        defaultValues: {
            keywords: ""
        }
    })

    const searchFormHandler = (values: z.infer<typeof searchFormSchema>) => {
        console.log(values.keywords);
    }

    return (
        <div>
            <header className="w-2/5 text-6xl font-medium m-auto text-center">
                Search
            </header>
            <div>
                <Form {...searchForm}>
                    <form className="w-xl m-auto" onSubmit={searchForm.handleSubmit(searchFormHandler)}>
                        <FormField
                            control={searchForm.control}
                            name="keywords"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        Keywords
                                    </FormLabel>

                                    <FormControl>
                                        <Input 
                                        {...field}
                                        
                                        >
                                        </Input>
                                    </FormControl>
                                </FormItem>
                            )}
                        >
                        </FormField>
                        <Button
                            className="block m-auto mt-6 px-6 py-2 bg-blue-600 text-white text-sm font-medium rounded-md shadow-sm hover:bg-blue-700 transition">
                            Search</Button>

                    </form>
                </Form>

            </div>
            <div className="max-w-4xl mx-auto mt-14">
                <PapersTable papers={[]} title={"Search Results"}>

                </PapersTable>

            </div>

        </div>)
}