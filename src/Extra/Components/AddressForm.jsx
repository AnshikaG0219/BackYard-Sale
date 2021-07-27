import React,{useState} from 'react'
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core'
import { useForm , FormProvider } from 'react-hook-form';
import FormInput from './CustomText';
import { Link } from 'react-router-dom';

import {commerce} from './CustomText';

export default function AddressForm({next}) {
    const methods = useForm();

    return (
        <>
        <Typography variant="h6" gutterBottom>Shipping Address</Typography>
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit((data) => next({ data }))}>
                <Grid container spacing={3}>
                    <FormInput required name='firstName' label='First Name'/>
                    <FormInput required name='lastName' label='Last Name'/>
                    <FormInput required name='email' label='Email'/>
                    <FormInput required name='mobileNo' label='Mobile Number'/>
                    <FormInput required name='address' label='Address'/>
                    <FormInput required name='city' label='City'/>
                    <FormInput required name='zip' label='ZIP'/>
                </Grid>
                <br/>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <Button component={Link} to="/cart" variant = "outlined">Back to Cart</Button>
                    <Button type="submit" variant = "contained" color="primary">Next</Button>
                </div>
            </form>
        </FormProvider>
        </>
    )
}
