'use client';
import { useRouter } from 'next/navigation';
import { QUESTIONS } from '../../constants/Questions';
import QuestionRenderer from '@/app/Components/QuestionRenderer';
import {
  fetchOptionsData,
  getTransactionId,
} from '@/app/store/slices/formSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ActionBoolean from '@/app/Components/ActionBoolean';
import Loader from '@/app/Components/Loader';
import Section1 from '@/app/Components/Sections/Section1';
import Section2 from '@/app/Components/Sections/Section2';
import Section3 from '@/app/Components/Sections/Section3';
import Section4 from '@/app/Components/Sections/Section4';

export default function Form1() {
  const dispatch = useDispatch();

  const options = useSelector((state) => state.form.options || []);
  const transactionId = useSelector((state) => state.form.transactionId || null);
  const loading = useSelector((state) => state.form.loading || false);

  const handleYesFun = () => {
    dispatch(fetchOptionsData());
    dispatch(getTransactionId());
  };
  const handleNoFun = () => {
    alert('Bye...');
  };

  return (
    <div className="w-full mx-auto p-10 py-5 flex flex-col gap-5">
    {/* Loading Overlay */}
    <Loader isLoading={loading} />

    {/* Conditional Content */}
    {transactionId === null ? (
        <ActionBoolean
          question={{
            id: 's1.q.0.1',
            label:
              'Do you accept the software will store all the intellectual property Info?',
          }}
          handleYes={handleYesFun}
          handleNo={handleNoFun}
        />
    ) : (
      <Tabs defaultValue="Part1" className="w-full bg-white p-5 rounded-xl">
        <TabsList>
          <TabsTrigger value="Part1">Part 1</TabsTrigger>
          <TabsTrigger value="Part2">Part 2</TabsTrigger>
        </TabsList>
        <TabsContent value="Part1">
          <Tabs
            defaultValue="section1"
            className="w-full border-gray-100 border-2 p-5 py-3 rounded-xl"
          >
            <TabsList>
              <TabsTrigger value="section1">Section 1</TabsTrigger>
              <TabsTrigger value="section2">Section 2</TabsTrigger>
            </TabsList>
            <TabsContent value="section1">
              <Section1 />
            </TabsContent>
            <TabsContent value="section2">
              <Section2 />
            </TabsContent>
          </Tabs>
        </TabsContent>
        <TabsContent value="Part2">
          <Tabs
            defaultValue="section3"
            className="w-full border-gray-100 border-2 p-5 py-3 rounded-xl"
          >
            <TabsList>
              <TabsTrigger value="section3">Section 3</TabsTrigger>
              <TabsTrigger value="section4">Section 4</TabsTrigger>
            </TabsList>
            <TabsContent value="section3">
              <Section3 />
            </TabsContent>
            <TabsContent value="section4">
              <Section4 />
            </TabsContent>
          </Tabs>
          </TabsContent>

        </Tabs>
    )}
  </div>
  );
}
