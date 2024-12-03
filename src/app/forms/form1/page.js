'use client';
import { useRouter } from 'next/navigation';
import { QUESTIONS } from '../../constants/Questions';
import QuestionRenderer from '@/app/Components/QuestionRenderer';
import { fetchOptionsData } from '@/app/store/slices/formSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Form1() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchOptionsData());
  }, []);

  const options = useSelector((state) => state.form.options || []);

  console.log('options', options);

  return (
    <div className='w-full mx-auto p-10 py-5 flex flex-col gap-5'>
      <Tabs defaultValue='Part1' className='w-full bg-white p-5 rounded-xl'>
        <TabsList>
          <TabsTrigger value='Part1'>Part 1</TabsTrigger>
          <TabsTrigger value='Part2'>Part 2</TabsTrigger>
        </TabsList>
        <TabsContent value='Part1'>
          <Tabs
            defaultValue='section1'
            className='w-full border-gray-100 border-2 p-5 py-3 rounded-xl'
          >
            <TabsList>
              <TabsTrigger value='section1'>Section 1</TabsTrigger>
              <TabsTrigger value='section2'>Section 2</TabsTrigger>
            </TabsList>
            <TabsContent value='section1'>
              Section 1 questions goes here
            </TabsContent>
            <TabsContent value='section2'>
              Section 2 questions goes here
            </TabsContent>
          </Tabs>
        </TabsContent>
        <TabsContent value='Part2'>
          <Tabs
            defaultValue='section3'
            className='w-full border-gray-100 border-2 p-5 py-3 rounded-xl'
          >
            <TabsList>
              <TabsTrigger value='section3'>Section 3</TabsTrigger>
              <TabsTrigger value='section4'>Section 4</TabsTrigger>
            </TabsList>
            <TabsContent value='section3'>
              Section 3 questions goes here
            </TabsContent>
            <TabsContent value='section4'>
              Section 4 questions goes here
            </TabsContent>
          </Tabs>
        </TabsContent>
      </Tabs>

      {/* <QuestionRenderer questions={QUESTIONS} /> */}
    </div>
  );
}
