import React, { useState } from 'react';
import Head from 'next/head'
import Values from '../components/values';
import ChartHeaders from '../components/chartHeaders';
import GridRows from '../components/gridRows';

import { Grid, Text } from '@occmundial/occ-atomic';

const bandRangeUrl = 'http://localhost:3001/v1.0/band_range'
const calculatorUrl = 'http://localhost:3001/v1.0/calculator'

const calculateResistance = (band1, band2, band3, band4, setResult) => {
  if (band1 === '' || band2 === '' || band3 === '' || band4 === '') {
    setResult({ resistance: -1, tolerance: { min: -1, max: -1 } })
    return
  }
  let fetchUrl = `${calculatorUrl}?bandAColor=${band1}&bandBColor=${band2}&bandCColor=${band3}&bandDColor=${band4}`
  fetch(fetchUrl, { method: 'GET' })
    .then(r => r.json())
    .then(data => {
      if (!data) {
        setResult({ resistance: -1, tolerance: { min: -1, max: -1 } })
        return
      }
      setResult(data)
    });
}

export default function Home(props) {
  const [result, setResult] = useState({ resistance: -1, tolerance: { min: -1, max: -1 } });

  const [bandA, setBandA] = useState('');
  const bandAObj = { band: bandA, setBand: (bandVal) => { setBandA(bandVal); calculateResistance(bandVal, bandB, bandC, bandD, setResult) } }
  const [bandB, setBandB] = useState('');
  const bandBObj = { band: bandB, setBand: (bandVal) => { setBandB(bandVal); calculateResistance(bandA, bandVal, bandC, bandD, setResult) } }
  const [bandC, setBandC] = useState('');
  const bandCObj = { band: bandC, setBand: (bandVal) => { setBandC(bandVal); calculateResistance(bandA, bandB, bandVal, bandD, setResult) } }
  const [bandD, setBandD] = useState('');
  const bandDObj = { band: bandD, setBand: (bandVal) => { setBandD(bandVal); calculateResistance(bandA, bandB, bandC, bandVal, setResult) } }

  return (
    <div className="container">
      <Head>
        <title>Ohm Calculator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Text hero center>Ohm Color Online Calculator</Text>
        <Values result={result} />
        <Grid>
          <ChartHeaders />
          <GridRows rows={props.res} band1={bandAObj} band2={bandBObj} band3={bandCObj} band4={bandDObj} />
        </Grid>
      </main>
    </div>
  )
}

export async function getStaticProps(_context) {
  const res = await fetch(bandRangeUrl)
  const data = await res.json()
  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: data, // will be passed to the page component as props
  }
}

